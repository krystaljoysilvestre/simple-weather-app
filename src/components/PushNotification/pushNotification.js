import React, { useState, useEffect } from 'react';
import Notification from 'react-web-notification';

const PushNotification = props => {
  const [ignored, isIgnored] = useState(false);

  useEffect(() => {
    if (ignored) {
      return;
    }
  }, [props.title]);

  const handlePermissionGranted = () => {
    isIgnored(false);
  };

  const handlePermissionDenied = () => {
    isIgnored(true);
  };

  const handleNotSupported = () => {
    isIgnored(true);
  };

  const options = {
    icon: props.icon,
    body: 'Stay safe! :)'
  };

  return (
    <Notification
      ignore={ignored && props.title !== ''}
      title={props.title}
      timeout={5000}
      notSupported={handleNotSupported}
      onPermissionGranted={handlePermissionGranted}
      onPermissionDenied={handlePermissionDenied}
      options={options}
    />
  )
};

export default PushNotification;