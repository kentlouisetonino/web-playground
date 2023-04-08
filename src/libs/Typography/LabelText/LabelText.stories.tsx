import LabelText from './LabelText';

export default {
  title: 'Typography/Label Text',
};

export function ExtraSmall() {
  return <LabelText value="This is an extra small label text." size="xsmall" />;
}

export function Small() {
  return <LabelText value="This is a small label text." size="small" />;
}

export function Regular() {
  return <LabelText value="This is a regular label text." />;
}

export function Large() {
  return <LabelText value="This is a large label text." size="large" />;
}

export function ExtraLarge() {
  return <LabelText value="This is a large label text." size="xlarge" />;
}
