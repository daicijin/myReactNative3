import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { AppHeaderText, AppProgress } from '@src/components/atoms';

const styles = StyleSheet.create({
  ratioArea: {
    paddingTop: 20,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTextContainer: {
    paddingLeft: 20,
    marginBottom: 8,
  },
  text: {
    color: AppColor.WHITE,
    fontSize: 20,
    marginVertical: 3,
  },
  numberText: {
    marginLeft: 8,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
  },
});

export interface AppProgressPanelProps {
  numofCpleted: number;
  numofAll: number;
  numofUncompleted: number;
  completedRatio: number;
  uncompletedRatio: number;
}

const AppProgressPanel = ({
  numofCpleted,
  numofAll,
  numofUncompleted,
  completedRatio,
  uncompletedRatio,
}: AppProgressPanelProps) => {
  return (
    <View style={styles.ratioArea}>
      <View style={styles.headerTextContainer}>
        <AppHeaderText text="Progress" />
      </View>
      <View style={styles.graphContainer}>
        <AppProgress value={completedRatio} />
        <View style={styles.textContainer}>
          <View>
            <AppHeaderText text="Completed" />
            <AppHeaderText text="Uncompleted" />
          </View>
          <View>
            <AppHeaderText text={`${numofCpleted}`} />
            <AppHeaderText text={`${numofUncompleted}`} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default AppProgressPanel;
