import { StyleSheet, Font } from '@react-pdf/renderer'
import {
  SFCompactDisplayUltraLight,
  SFCompactDisplayRegular,
  SFCompactTextRegular,
  SFCompactTextBold,
} from './fonts'


// Font.register({ family: 'SFPro Display', fonts: [
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-UltraLight.ttf", fontWeight: 100 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Thin.ttf", fontWeight: 200 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Light.ttf", fontWeight: 300 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Regular.ttf", fontWeight: 400 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Medium.ttf", fontWeight: 500 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-SemiBold.ttf", fontWeight: 600 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Bold.ttf", fontWeight: 700 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Heavy.ttf", fontWeight: 800 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProDisplay-Black.ttf", fontWeight: 900 },
// ]});

// Font.register({ family: 'SFPro Text', fonts: [
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-Light.ttf", fontWeight: 300 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-Regular.ttf", fontWeight: 400 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-Medium.ttf", fontWeight: 500 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-SemiBold.ttf", fontWeight: 600 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-Bold.ttf", fontWeight: 700 },
//   { src: "https://cdn.jsdelivr.net/gh/blaisck/sfwin/SFPro/TrueType/SFProText-Heavy.ttf", fontWeight: 800 },
// ]});

Font.register({ family: 'SFCompact Display', fonts: [
  { src: SFCompactDisplayUltraLight, fontWeight: 100 },
  { src: SFCompactDisplayRegular, fontWeight: 400 },
]});


Font.register({ family: 'SFCompact Text', fonts: [
  { src: SFCompactTextRegular, fontWeight: 400 },
  { src: SFCompactTextBold, fontWeight: 700 },
]});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


const styles = StyleSheet.create({
  page: {
    padding: 72/2,
    justifyContent: "space-between",
    fontFamily: "SFCompact Display",
    marginBottom: 72,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  name: {
    marginTop: -2,
    fontSize: 42,
  },

  contact: {
    alignSelf: "stretch",
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: 14,
    lineHeight: 1.5,
  },

  tagline: {
    // marginLeft: 72/2,
    fontWeight: 100,
    fontSize: 22,
    marginBottom: 10,
  },

  section: {
    position: "relative",
    paddingLeft: 72/2 - 5,
  },

  sectionNamePositioner: {
    position: 'absolute',
    top: 2,
    left: -72*10 - 4,
    width: 72*10,
    height: 1,
  },

  sectionName: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: "rotate(-90deg)",
    transformOrigin: "right top",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },

  item: {
    fontFamily: "SFCompact Text",
    fontSize: 10,
    lineHeight: 1.2,
    marginBottom: 8,
  },

  itemFirstLine: {
    lineHeight: 1.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemSummary: {
    flexDirection: "row",
  },

  divider: {
    marginLeft: 3,
    marginRight: 3,
  },

  summary1: {
    fontWeight: 700,
  },

  dates: {
    // fontFamily: "Oswald",
    fontSize: 10,
  },

  itemBullet: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "120px",
  },

  bullet: {
    marginLeft: 7,
    marginRight: 4,
    marginTop: -2,
  },

  bulletText: {
    textIndent: -8,
    marginLeft: 10,
  }
})


export default styles
