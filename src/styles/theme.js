const palette = {
  Navy: '#1C3879',
  Blue: '#607EAA',
  Beige: '#EAE3D2',
  White: '#F9F5EB',
}

const common = {
  flexCenter: `
  display: flex;
  justify-content: center;
  align-items: center;
  `,
  flexAround: `
  display: flex;
  align-items: center;
  justify-content: space-around;
  `,
  flexColumnStart: `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  `,
}

const fontSizes = {
  title: '2rem',
  subtitle: '1.5rem',
  paragraph: '1rem',
}

const theme = {
  palette,
  common,
  fontSizes,
}

export default theme
