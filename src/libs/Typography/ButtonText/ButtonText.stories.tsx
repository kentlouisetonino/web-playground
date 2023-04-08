import ButtonText from './ButtonText';

export default {
  title: 'Typography/Button Text',
};

export function ExtraSmall() {
  return (
    <div className="bg-dark p-3">
      <ButtonText value="This is an extra small button text." size="xsmall" />
    </div>
  );
}

export function Small() {
  return (
    <div className="bg-dark p-3">
      <ButtonText value="This is a small button text." size="small" />
    </div>
  );
}

export function Regular() {
  return (
    <div className="bg-dark p-3">
      <ButtonText value="This is a regular button text." />
    </div>
  );
}

export function Large() {
  return (
    <div className="bg-dark p-3">
      <ButtonText value="This is a large button text." size="large" />
    </div>
  );
}

export function ExtraLarge() {
  return (
    <div className="bg-dark p-3">
      <ButtonText value="This is an extra large button text." size="xlarge" />
    </div>
  );
}
