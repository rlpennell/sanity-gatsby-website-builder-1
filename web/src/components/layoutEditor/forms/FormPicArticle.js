import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { navigate } from "gatsby";
import BasicEditor from "../../ultilitys/BasicEditor";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
import ButtonSubmit from "../../articleEditor/buttons/ButtonSubmit";
import PicArticle from "../../articleEditor/images/PicArticle";
const Wrapper = styled.div``;
// Pic Article Container
const PicArticleWrapper = styled.div``;
// Form Wrapper
const FormWrapper = styled.form`
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "inherit"};
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};
`;
const FormBackground = styled(BackgroundWrapper)``;
const Label = styled.label`
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : "inherit"};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : "inherit"};
  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
  }
`;
const Input = styled.input`
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : "inherit"};
  color: ${(props) =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : "inherit"};
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};
  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
  }
`;
const Textarea = styled.textarea`
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : "inherit"};
  color: ${(props) =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : "inherit"};
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};
  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
  }
`;

function FormPicArticle({ data }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [telephone, setTelephone] = useState("");

  // Encodes all the data before sending it
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        firstName: firstName,
        email: email,
        telephone: telephone,
        description: description,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };

  return (
    <Wrapper>
      <PicArticleWrapper>
        <PicArticle data={data.picArticle} />
      </PicArticleWrapper>
      <BasicEditor data={data.textEditor} />
      <FormBackground data={data.pic}>
        <FormWrapper customtheme={data.theme ? data.theme : "inherit"}>
          <input name="contact" value="Netlify Rocks" type="hidden" />
          <input type="hidden" name="bot-field" />
          <Label
            customtheme={data.theme ? data.theme.formTheme : "inherit"}
            htmlFor="FirstName"
          >
            <h4>First Name</h4>
            <Input
              customtheme={data.theme ? data.theme.formTheme : "inherit"}
              required
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Label>
          <Label
            customtheme={data.theme ? data.theme.formTheme : "inherit"}
            htmlFor="Email"
          >
            <h4>Email</h4>
            <Input
              customtheme={data.theme ? data.theme.formTheme : "inherit"}
              required
              type="text"
              name="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label
            customtheme={data.theme ? data.theme.formTheme : "inherit"}
            htmlFor="telephone"
          >
            <h4>Telephone</h4>
            <Input
              customtheme={data.theme ? data.theme.formTheme : "inherit"}
              required
              type="tel"
              name="telephone"
              placeholder="123-456-7890"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </Label>
          <Label
            customtheme={data.theme ? data.theme.formTheme : "inherit"}
            htmlFor="description"
          >
            <h4>How can we help</h4>
            <Textarea
              customtheme={data.theme ? data.theme.formTheme : "inherit"}
              name="description"
              rows="4"
              required
              cols="20"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="How can we help you!"
            />
          </Label>
          <ButtonSubmit
            onSubmit={handleSubmit}
            onClick={handleSubmit}
            data={data.button}
          />
        </FormWrapper>
      </FormBackground>
    </Wrapper>
  );
}

export default FormPicArticle;
