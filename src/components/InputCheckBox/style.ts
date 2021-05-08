import styled, { css } from "styled-components";

interface IInputCheckBoxProps {
  isHover?: boolean;
  isBefore?: boolean;
  isAfter?: boolean;
  img?: string;
}

export const InputCheckBoxContainer = styled.div<IInputCheckBoxProps>`
  /* display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  width: 100%;
  /* opacity: 0;  */

  & label {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    position: relative;
    ${(props) =>
      props.isBefore &&
      css<IInputCheckBoxProps>`
        &::before {
          content: "";
          display: block;
          background-image: url(${(props) => props.img});
          background-repeat: no-repeat;
          background-position: center center;
          /* position: absolute; */
          height: 2rem;
        }
      `}

    & span {
      min-width: 10rem;
    }

    ${(props) =>
      props.isAfter &&
      css<IInputCheckBoxProps>`
        &::after {
          content: "";
          display: block;
          background-image: url(${(props) => props.img});
          background-repeat: no-repeat;
          /* background-position: center center; */
          height: 2rem;
          width: 2rem;
          position: absolute;
          top: 9px;
          right: 110px;
        }
      `}
  }

  & input {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    opacity: 0;
    &[type="checkbox"],
    &[type="radio"] {
      padding-right: 1rem;
      padding-left: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      /* border: 1px #ccc solid;  */
      border: 3px solid transparent;
      /* width: 100%; */
      background-color: ${(props) => props.theme.colors.gray_light};
      color: ${(props) => props.theme.colors.dark};
      border-radius: 30px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      font-size: 1em;
      height: 2rem;
      width: 2rem;
      margin-left: 1rem;

      ${(props) =>
        props.isHover &&
        css<IInputCheckBoxProps>`
          &:hover {
            box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3) !important;
            -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
          }
        `};
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  &--padding {
    padding: 0.5em 5em 0.5em 2.5em !important;
  }

  &__position {
    &--relative {
      position: relative;
    }

    &--absolute {
      position: absolute;
      bottom: 290px;
    }
  }

  &__title {
    display: block;
    margin: 15px 0px 5px 0px;
    font-size: 1.1em;
  }

  &__shadow {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3) !important;
    -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
  }

  &__address {
    margin: 0px auto;

    &__title {
      display: block;
      margin-bottom: 25px;
    }
  }

  [type="ckeckbox"] {
    padding-right: 1rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    /* border: 1px #ccc solid;  */
    border: 3px solid transparent;
    width: 100%;
    background-color: ${(props) => props.theme.colors.gray_light};
    color: ${(props) => props.theme.colors.dark};
    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    font-size: 1em;
    height: 100%;

    ${(props) =>
      props.isHover &&
      css<IInputCheckBoxProps>`
        &:hover {
          box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3) !important;
          -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
          -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
        }
      `};

    &--small {
      max-width: 30%;
    }

    &--medium {
      max-width: 50%;
    }

    &--large {
      max-width: 80%;
    }

    &--full {
      max-width: 100%;
    }

    /* .form-default__field:hover {
          background-color: #f00; 
          border-color: #FFF;
          color: #FFF;
      } */

    &[type="color"] {
      height: 40px;
      cursor: pointer;
    }

    &:focus {
      border: 3px solid #488cf5;
      outline: none;
      /* color: #555; */
    }

    &::-webkit-input-placeholder {
      color: #555;
    }

    &--textarea {
      padding: 0.5em 0.5em;
      /* border: 1px #ccc solid;  */
      border: 3px solid transparent;
      max-width: 100%;
      min-width: 100%;
      background: #fff;
      color: #555;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
    }

    &--textarea:focus {
      border: 3px solid #f00;
      outline: none;
      color: #555;
    }

    &__button {
      width: auto;
      margin: 15px 15px 15px 0px;
      padding: 0.75em 1.8em;
      font-weight: bold;
      cursor: pointer;
      background-color: #fff;
      border-color: #f00;
      color: #f00;

      &--bred {
        background-color: #fff;
        border-color: #995b5b;

        &:hover {
          background-color: #cc7979;
          border-color: #b26a6a;
        }
      }
    }

    &--bzero {
      background-color: #b26a6a;
      border-color: #995b5b;

      &:hover {
        background-color: #cc7979;
        border-color: #b26a6a;
      }
    }
  }

  & input [type="checkbox"] {
    background-color: red;
    color: red;
  }

  &__check {
    margin-bottom: 15px;

    &__field {
      float: left;
      width: auto;
      margin: 4px 10px 0 0;
      cursor: pointer;
    }

    &__title {
      display: inline-block;
      margin-right: 30px;
      padding: 8px 15px 10px 15px;
      background: #fbfbfb;
      cursor: pointer;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }

    &__title:hover {
      background: #fff;
    }
  }

  /* :required{background: #fff; border-color: #59aa66} */

  /* :invalid{background: #fff; border-color: #59aa66} */

  /* :valid{background-color: #fff; border-color: #9b9b9b} */

  /* FROMULARIO CONTATO */

  .contact-default {
    padding: 10px;

    /* .contact_info h1 {margin-bottom: 10px;} */

    &__list {
      margin-bottom: 30px;
    }

    &__item {
      margin-bottom: 10px;
      font-size: 1.1em;
    }

    &__link {
      color: #cf4823;

      &__link:hover {
        text-decoration: underline;
      }
    }

    &__paragraph {
      font-size: 0.9em;
      font-weight: 300;
    }

    &__address {
      margin: 0px auto;
      height: 100%;
    }

    &__field {
      width: 80%;
      margin: 0px 10%;
    }

    &__content {
      background-image: url(../img/mapa.png);
      background-repeat: no-repeat;
      background-position: center center;
    }

    &__title {
      float: left;
      width: 80%;
      margin: 0 10%;
      padding: 30px;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
