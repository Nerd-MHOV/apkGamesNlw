import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[
                theme.colors.secondary80,
                theme.colors.secondary100
            ]}
        >
            { children }
        </LinearGradient>
    )
}