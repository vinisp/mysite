import './style.scss';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import javascriptLogo from '../../assets/logos/javascript.svg';
import reactLogo from '../../assets/logos/react.svg';
import sassLogo from '../../assets/logos/sass.svg';
import graphqlLogo from '../../assets/logos/graphql.svg';
import mariadbLogo from '../../assets/logos/mariadb.svg';
import nodejsLogo from '../../assets/logos/nodejs.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      justifyContent: 'flex-start',
      border: 'solid 1px black'
    },
  },
}));


export function Main(){
  const classes = useStyles();
  return(
  <>
    <div className="main">
        <div className="title">
          <h1 className="titleName">FRONT END WEB DEVELOPER</h1>
            <p className="subTitle">asdoijkasidjioasjdasjiodjasiodjasiojdioasj aisjd ioasjd ioaj aisj dijasi djasio djaisojd iasjd iaosjd ioajs idoajs idojsa  Developer better interfaces and sites for your bussinessss, with moderns technologies, tools, UI and UX for better apresention of you organization. LOREM YPSUN kijdsijaisdjiasjdiasdjijasoidjasiojdioasjiodjaisodiajsdi</p>
            <div className="buttonContainer">
              <div className={classes.root}>
                <Button variant="contained" color="secondary">Agendar </Button>
                <Button>PDF </Button>
              </div>
                </div>
                  <div className="skills">
                    <ul className="skillsList">
                      <li> <img src={javascriptLogo} alt="Javascript Logo" /> </li>
                      <li> <img src={reactLogo} alt="React Logo" /> </li>
                      <li> <img src={sassLogo} alt="Sass Logo" /> </li>
                      <li> <img src={nodejsLogo} alt="Nodejs Logo" /> </li>
                      <li> <img src={graphqlLogo} alt="GraphQl Logo" /> </li>
                      <li> <img src={mariadbLogo} alt="MariaDb Logo" /> </li>
                    </ul>
                    </div>
        </div>
    </div>
  </>
  )
}
