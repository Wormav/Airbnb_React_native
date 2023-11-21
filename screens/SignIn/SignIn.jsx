import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importez l'icône FontAwesome
import logo from "../../assets/logo.png";
import { s } from "../authScreens.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

export default function SignIn({ navigation }) {
  const { height, width } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // État pour gérer l'affichage du mot de passe

  const onSubmit = async () => {
    setError("");
    setIsSubmit(true);
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      setIsSubmit(false);
      alert("Oui ça marche mec");
    } catch (err) {
      setError("Erreur de connexion. Veuillez vérifier vos informations.");
      setIsSubmit(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={(s.container, { height: height, width: width })}
      vertical={true}
    >
      <KeyboardAwareScrollView>
        <View style={s.box}>
          <Image source={logo} style={s.logo} />
          <Text style={s.title}>Sign in</Text>
        </View>
        <View style={s.box}>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={s.input}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                  field.onChange(text);
                }}
                value={email}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <Text style={s.error}>
              Veuillez entrer une adresse e-mail valide.
            </Text>
          )}
          <View style={s.passwordInputContainer}>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={s.input}
                  placeholder="Password"
                  onChangeText={(text) => {
                    setPassword(text);
                    field.onChange(text);
                  }}
                  value={password}
                  secureTextEntry={!showPassword}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            <TouchableOpacity
              style={s.passwordVisibilityButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <FontAwesome
                name={showPassword ? "eye" : "eye-slash"}
                size={24}
                color="gray"
                style={s.passwordVisibilityIcon}
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={s.error}>Veuillez entrer un mot de passe valide.</Text>
          )}
        </View>
        <View style={s.box}>
          {error && <Text style={s.error}>{error}</Text>}
          <TouchableOpacity
            disabled={isSubmit}
            style={s.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={s.button.text}>Sign in</Text>
          </TouchableOpacity>
          {isSubmit && <ActivityIndicator />}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={s.link}>No account ? Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
