/*
 * @Project Bluezone
 * @Author Bluezone Global (contact@bluezone.ai)
 * @Createdate 04/28/2020, 09:59
 *
 * This file is part of Bluezone (https://bluezone.ai)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import moment from 'moment';
import 'moment/locale/vi'; // without this line it didn't work

// Components
import Text, {MediumText} from '../../../base/components/Text';
import Header from '../../../base/components/Header';
// import ButtonIconText from '../../../base/components/ButtonIconText';

// Styles
import styles from './styles/index.css';
import FastImage from 'react-native-fast-image';
// import InviteScreen from "../InviteScreen";

class NotifyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
  }

  onBack() {
    this.props.navigation.goBack();
    return true;
  }

  render() {
    const {route} = this.props;
    const item = (route && route.params.item) || {};
    const uri = item.largeIcon && item.largeIcon.length > 0 ? item.largeIcon : require('./styles/images/corona.png');
    return (
      <SafeAreaView style={styles.container}>
        <Header
          onBack={this.onBack}
          colorIcon={'#015cd0'}
          styleTitle={styles.textHeader}
          showBack
          title={'Thông báo'}
        />
        <ScrollView style={styles.wrapper}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={uri}
              style={styles.avatar}
            />
            <View style={styles.content}>
              <MediumText numberOfLines={1} style={styles.titleText}>
                {item.title}
              </MediumText>
              <MediumText style={styles.colorDes}>
                Thời gian: {moment(item.timestamp).format("HH:mm")} Ngày: {moment(item.timestamp).format("DD/MM/YYYY")}
              </MediumText>
            </View>
          </View>
          <Text style={styles.textContent}>{item.bigText}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NotifyScreen;
