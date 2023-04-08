import TitleText from './TitleText';

export default {
  title: 'Typography/Title Text',
};

export function ExtraSmall() {
  return <TitleText value="This is an extra small title text." size="xsmall" />;
}

export function Small() {
  return <TitleText value="This is a small title text." size="small" />;
}

export function Regular() {
  return <TitleText value="This is a regular title text." />;
}

export function Large() {
  return <TitleText value="This is a large title text." size="large" />;
}

export function ExtraLarge() {
  return <TitleText value="This is an extra large title text." size="xlarge" />;
}
