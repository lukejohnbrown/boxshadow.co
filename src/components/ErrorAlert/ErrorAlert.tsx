import React, { useState } from 'react'
import { ErrorAlertWrapper } from "./styles";

const ErrorAlert = () => {
  const [showError, setShowError] = useState(true);

  setTimeout(() => {
    setShowError(false);
  }, 5000);

  return (
    <ErrorAlertWrapper showError={showError}>
      It looks like something went wrong 🤔
    </ErrorAlertWrapper>
  )
}

export default ErrorAlert
