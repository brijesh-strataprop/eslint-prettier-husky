import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
} from 'react-native';
import SPTextInputStyle from './SPTextInputStyle';

function SPTextInput(props) {
    const {
        containerStyle,
        textInputStyle,
        title,
        leftIcon,
        leftIconStyle,
        leftIconContainerStyle,
        rightIcon,
        rightIconStyle,
        rightIconContainerStyle,
        children,
    } = props;

    const {
        titleTextStyle,
        textInputContainerStyle,
        internalTextInputStyle,
        imageContainerStyle,
        internalLImageContainerStyle,
        internalRImageContainerStyle,
        imageStyle,
    } = SPTextInputStyle;

    /**
     * @constant renderTitle
     * @description render title for text input
     */
     const renderTitle = () => {
        if (title) {
            return <View>
                <Text style={titleTextStyle}>{title}</Text>
            </View>
        }
        return null;
    }

    /**
     * @constant renderImageIcon
     * @description image icon to render it within text input container
     */
    const renderImageIcon = (source, style, customImageContainerStyle) => {
        if (source) {
            return <View style={[imageContainerStyle, customImageContainerStyle]}>
                <Image style={[imageStyle, style]} source={source}/>
            </View>
        }
        return null;
    }
    
    /**
     * @constant renderInputText
     * @description render render InputText
     */
    const renderInputText = () => {
        return <View style={textInputContainerStyle}>
            {renderImageIcon(
                leftIcon,
                leftIconStyle,
                [internalLImageContainerStyle, leftIconContainerStyle]
            )}
            <TextInput {...props} style={[internalTextInputStyle, textInputStyle]}/>
            {renderImageIcon(
                rightIcon,
                rightIconStyle,
                [internalRImageContainerStyle, rightIconContainerStyle]
            )}
        </View>
    }

    return <View style={containerStyle}>
        {renderTitle()}
        {renderInputText()}
        {children}
    </View>
}

export default SPTextInput;
