import IoniconsI from 'react-native-vector-icons/Ionicons';

export const PermissionsList = [
    {
        navigateRoute: 'ContactsList',
        iconName: 'person-outline',
        label: 'Contacts',
    },
    {
        navigateRoute: 'Location',
        iconName: 'location-outline',
        label: 'Location',
    },
];

export const ChartList = [
    {
        navigateRoute: 'VictoryBarChart',
        iconName: 'bar-chart',
        label: 'Victory BarChart',
    },
    /* No iOS code for these 2 pages, so they're at the bottom of the list */
    {
        navigateRoute: 'LineChartScreen',
        iconName: 'bar-chart',
        label: 'Line Chart',
    },
    {
        navigateRoute: 'RadarhartScreen',
        iconName: 'pie-chart-outline',
        label: 'Radar Chart',
    },
];
