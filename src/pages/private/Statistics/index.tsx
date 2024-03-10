import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackPramsList from '@src/routes/Params/stacks';
import { Page } from '@src/constants/path';
import { useNavigation } from '@react-navigation/native';
import AppProgressPanel, { AppProgressPanelProps as Statistic } from '@src/components/molecules/AppProgressPanel';
import { State as TodoState } from '@src/components/organisms/AppTodos/Todo';
import { AppHeaderText } from '@src/components/atoms';
import { AppTodos } from '@src/components/organisms';

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 8,
  },
});

const props = {
  statistics: {
    numofCpleted: 10,
    numofAll: 25,
    numofUncompleted: 15,
    completedRatio: 0.4,
    uncompletedRatio: 0.6,
  },
  histories: [
    {
      id: '1',
      title: 'Todo1',
      detail: 'Done',
      isDone: true,
    },
    {
      id: '2',
      title: 'Todo2',
      detail: 'Done',
      isDone: true,
    },
  ],
};

interface StatisticsHeaderProps {
  statistics: Statistic;
  histories: TodoState[];
}

const Header = ({ statistics }: StatisticsHeaderProps) => {
  return (
    <View>
      <AppProgressPanel {...statistics} />
      <View style={styles.headerTextContainer}>
        <AppHeaderText text="Recent Histories" />
      </View>
    </View>
  );
};

type StatisticsScreenNavigatorProps = StackNavigationProp<RootStackPramsList, 'STATISTICS'>;
const Statistics = () => {
  const navigation = useNavigation<StatisticsScreenNavigatorProps>();
  const gotoDetail = useCallback(() => {
    (state: TodoState, isEditable: boolean) => {
      console.log({ isEditable });
      navigation.navigate(Page.DETAIL, { state, isEditable });
    };
  }, [navigation]);

  const actions = useMemo(() => ({ gotoDetail }), [gotoDetail]);

  useEffect(() => {
    console.log('@@@ mount page loading @@@');

    return () => {
      console.log('@@@ dismount page unloading @@@');
    };
  });

  return <AppTodos isEditable={false} todos={props.histories} actions={actions} header={<Header {...props} />} />;
};

export default Statistics;
