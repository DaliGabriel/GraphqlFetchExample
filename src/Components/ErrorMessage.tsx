import { ApolloError } from "@apollo/client";
import React from "react";

interface ErrorMessageProps {
  error: ApolloError | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <>{error ? <p>Error : {error?.message}</p> : <p>Error : Unknowed</p>}</>
  );
};

export default ErrorMessage;
