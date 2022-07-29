import React from "react";
import { Text, View } from 'react-native';
import SettingsComponent from "../../components/SettingsComponent";


const Settings = () => {
    const SettingsOptions = [
        <Text>Account Settings</Text>,

        { title: 'My Profile', subTitle: 'Edit your profile', onPress: () => { } },
        { title: 'Privacy and Notification', subTitle: 'Legally', onPress: () => { } },
        { title: 'Language', subTitle: 'Change app language', onPress: () => { } },

        < Text > Support</Text >,

        { title: 'Feedback', subTitle: "Let's hear from you'", onPress: () => { } },
        { title: 'About Cura Health', subTitle: 'About us', onPress: () => { } },
        { title: 'Rate Cura health', subTitle: 'Rate our app', onPress: () => { }}

    ];
    return (
      


        <SettingsComponent SettingsOptions={SettingsOptions}/>
    )
}

export default Settings;