import React from 'react';
import { 
    View,
    ViewStyle,
    Text,
    ScrollView
} from 'react-native';

import { theme } from '../../config';

function Extract() {
    return (
        <View style={ theme.baseContainer as ViewStyle }>
            
            <ScrollView
                    style={{ flex: 1, position: 'relative', zIndex: 5 }}
                    scrollEventThrottle={16}                 
                    keyboardShouldPersistTaps="always"        
            >

                <Text>Extrato</Text>
            
            </ScrollView> 

        </View>
    );
}

export default Extract;