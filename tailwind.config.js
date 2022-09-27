/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./apps/components/**/*.{js,ts,jsx,tsx}",
        "./apps/layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "gilroy-bold": ["gilroy-bold", "sans-serif"],
                "gilroy-semibold": ["gilroy-semibold", "sans-serif"],
                "gilroy-medium": ["gilroy-medium", "sans-serif"],
                "gilroy-normal": ["gilroy-normal", "sans-serif"],
                "gilroy-light": ["gilroy-light", "sans-serif"],
                "gilroy-extralight": ["gilroy-extralight", "sans-serif"],
                "gilroy-thin": ["gilroy-thin", "sans-serif"]
            },
            fontSize: {
                "heading-1": ["64px", "1.2"],
                "heading-2": ["48px", "1.2"],
                "heading-3": ["40px", "1.2"],
                "heading-4": ["32px", "1.3"],
                "heading-5": ["24px", "1.5"],
                "heading-6": ["20px", "1.5"],
                "heading-7": "16px",
            },
            colors: {
                primary: {
                    main: "#131221",
                    surface: "#EFF0F6",
                    hover: "#2d2b45",
                    pressed: "#131221",
                    focus: "#CCD2E2",
                    border: "#808EB7",
                    dark: "#6638FA"
                },
                secondary: {
                    main: "#FEE2C5",
                    surface: "#FFF9F3",
                    border: "#FFF3E8",
                    hover: "#FFF1E2",
                    pressed: "#E5CBB1",
                    focus: "#FFF6EE"
                },
                semantic: {
                    success: {
                        main: "#37C99E",
                        surface: "#EBFAF5",
                        border: "#AFE9D8",
                        hover: "#87DFC5",
                        pressed: "#32B58E",
                        focus: "#D7F4EC"
                    },
                    info: {
                        main: "#0099FF",
                        surface: "#E6F5FF",
                        border: "#99D6FF",
                        hover: "#66C2FF",
                        pressed: "#007ACC",
                        focus: "#CCEBFF"
                    },
                    warning: {
                        main: "#ffa70f",
                        surface: "#FFFBEE",
                        border: "#FFF0BB",
                        hover: "#FFE998",
                        pressed: "#E6C44C",
                        focus: "#FFF8DD"
                    },
                    danger: {
                        main: "#FE585B",
                        surface: "#FFEEEF",
                        border: "#FFBCBD",
                        hover: "#FE8A8C",
                        pressed: "#E54F52",
                        focus: "#FFDEDE"
                    }
                },
                neutral: {
                    10: "#FFFFFF",
                    20: "#F7F7F8",
                    30: "#E7E8EB",
                    40: "#B9BDC6",
                    50: "#868D9D",
                    60: "#6D7689",
                    70: "#555F75",
                    80: "#3D4961",
                    90: "#24324E",
                    100: "#0C1B3A"
                },
                porcellana: "#FFC1AD",
                nightshow: "#ADC4FF",
                palekingsblue: "#AAF0E8",
                adventureislandpink: "#F87853"
            }
        },
    },
    plugins: [],
}