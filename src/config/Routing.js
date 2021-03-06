import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Pages/Login';
import Register from '../components/Pages/Register';
import ForgotPassword from '../components/Pages/ForgotPassword';
import Home from '../components/Pages/Home';
import AddNote from '../components/Notes/Actions/AddNote';
import ArchiveNotes from '../components/Notes/Actions/ArchiveNotes';
import TrashNotes from '../components/Notes/Actions/TrashNotes';
import CreateLabel from '../components/Notes/Actions/CreateLabel';
import ReminderNotes from '../components/Notes/Actions/ReminderNotes';
import SearchNote from '../components/Notes/Actions/SearchNote';
import NotesWithImages from '../components/Notes/Actions/NotesWithImages';
import SplashScreen from '../components/Pages/SplashScreen';

const Router = createStackNavigator({
    Splash: { screen: SplashScreen, navigationOptions: { header: null } },
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword },
    AddNote: { screen: AddNote },
    Home: { screen: Home, navigationOptions: { header: null } },
    ArchiveNotes: { screen: ArchiveNotes, navigationOptions: { header: null } },
    TrashNotes: { screen: TrashNotes, navigationOptions: { header: null } },
    CreateLabel: { screen: CreateLabel },
    ReminderNotes: { screen: ReminderNotes },
    SearchNote: { screen: SearchNote },
    ImagesNotes: { screen: NotesWithImages }
},
    {
        initialRouteName: 'Splash'
    },
    {
        headerMode: 'screen'
    }
);

export default Router;