import RootState from '../app/store';
// import {
// 	Widgets,
// 	FullnessItem,
// } from 'app/kinopulse_dashboard/kinopulseDashboardReduxTypes';
// import { createSelector } from 'reselect';

// type Selector = (state: IReduxState) => TwoPeriodsChartData;

// export const getDashboardReducer = (state: IReduxState) => state.kinopulseDashboardReducer;

// export const getWidgets = (state: IReduxState) => getDashboardReducer(state).widgets;
// export const getViewersWidget = (state: IReduxState) => getDashboardReducer(state)[Widgets.Viewers];
// export const getSalesWidgetData = (state: IReduxState) => getDashboardReducer(state)[Widgets.Sales];

// export const getWeeklyData = (state: IReduxState) => getPerCapWidget(state).data;
// export const getPerCapData = (state: IReduxState) => getPerCapWidget(state).data;

// export const getSortedTopProducts = createSelector(
// 	getTopProductsWidget,
// 	({data, isFetching}) => ({
// 		data: sortByNat(data, listItem => listItem.total, undefined, {direction: 'DESC'}),
// 		isFetching,
// 	}),
// );

export const getColumns = (state: RootState) => state.trello.lists;