import BodyText from './BodyText';

export default {
  title: 'Typography/Body Text',
};

export function ExtraSmall() {
  return <BodyText value="This is an extra small body text." size="xsmall" />;
}

export function Small() {
  return <BodyText value="This is a small body text." size="small" />;
}

export function Regular() {
  return <BodyText value="This is a regular body text." />;
}

export function Large() {
  return <BodyText value="This is a large body text." size="large" />;
}

export function ExtraLarge() {
  return <BodyText value="This is an extra large body text." size="xlarge" />;
}
