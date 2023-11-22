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
import logo from "../../assets/logo.png";
import { s } from "../authScreens.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";

export default function SignUp({ navigation, setUser }) {
  const { height, width } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = async () => {
    setError("");
    setIsSubmit(true);
    if (password !== confirmpassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email: email,
          username: username,
          description: description,
          password: password,
        }
      );
      setUser(response.data);
      setIsSubmit(false);
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        setError("Cet email est déjà utilisé");
      } else {
        setError("Erreur de connexion. Veuillez vérifier vos informations.");
      }
      setIsSubmit(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={(s.container, { height: height, width: width })}
      vertical={true}
    >
      <KeyboardAwareScrollView>
        <View style={s.boxSingUp}>
          <Image source={logo} style={s.logo} />
          <Text style={s.title}>Sign up</Text>
        </View>
        <View style={s.boxSingUp}>
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
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={s.input}
                placeholder="Username"
                onChangeText={(text) => {
                  setUsername(text);
                  field.onChange(text);
                }}
                value={username}
              />
            )}
            name="username"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.username && (
            <Text style={s.error}>Veuillez entrer un pseudo valide.</Text>
          )}
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                style={s.inputBig}
                placeholder="Describe yourself in a few words..."
                onChangeText={(text) => {
                  setDescription(text);
                  field.onChange(text);
                }}
                value={description}
              />
            )}
            name="description"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.description && (
            <Text style={s.error}>Veuillez entrer une description.</Text>
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
          <View style={s.passwordInputContainer}>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={s.input}
                  placeholder="Confirm password"
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    field.onChange(text);
                  }}
                  value={confirmpassword}
                  secureTextEntry={!showPassword}
                />
              )}
              name="confirmpassword"
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
          {errors.confirmpassword && (
            <Text style={s.error}>
              Les mots de passe ne sont pas identiques.
            </Text>
          )}
        </View>
        <View style={s.boxSingUp}>
          {error && <Text style={s.error}>{error}</Text>}
          <TouchableOpacity style={s.button} onPress={handleSubmit(onSubmit)}>
            <Text style={s.button.text}>Sign up</Text>
          </TouchableOpacity>
          {isSubmit && <ActivityIndicator />}
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("SignIn")} style={s.link}>
              No account ? Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
