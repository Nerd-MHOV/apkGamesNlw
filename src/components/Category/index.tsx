import {TouchableOpacity, TouchableOpacityProps, View, Text} from "react-native";
import {SvgProps} from "react-native-svg";
import {LinearGradient} from 'expo-linear-gradient';

import {categories} from "../../utils/categories";
import {styles} from './styles';
import {theme} from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    hasCheckBox?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    const {secondary40, secondary50, secondary70, secondary75} = theme.colors;

    return (
        <TouchableOpacity {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <LinearGradient style={[styles.content, {opacity: checked ? 1 : 0.5}]} colors={[checked ? secondary75 : secondary50, secondary40]}>
                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check}/>
                    }
                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    )
}