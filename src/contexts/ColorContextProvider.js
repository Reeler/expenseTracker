import React, { Component, createContext } from "react"

export const ColorContext = createContext();

export default class ColorContextProvider extends Component{
    state = {
        isPositive: true,
        green: {color: "#19D92E"},
        red: {color: '#DF1D1D'} 
        }

        changeColorRed = () => {
            this.setState({isPositive: false})
        }

        changeColorGreen = () => {
            this.setState({isPositive: true})
        }

    render(){
        return(
            <ColorContext.Provider value={{...this.state, changeColorRed: this.changeColorRed, changeColorGreen: this.changeColorGreen}}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}