
export interface CustomTheme {
    colors: {
        $blue10: string;
        $blue3: string;
        $blue2: string;
        $blue1: string;
        
        $red5: string;
        $green5: string;

        $textColorBlack: string
        $textColorWhite: string
    }
}


const theme: CustomTheme = {
    colors: {
        $blue10: "#4B49AC",
        $blue3: "#7DA0FA",
        $blue2: "#98BDFF",
        $blue1: "#DCE1F8",
        
        $red5: "#F3797E",
        $green5: "#76c893",

        $textColorBlack: "#4E4E4E",
        $textColorWhite: "#ffffff",
    }
}
export default theme;
