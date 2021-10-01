import './style.scss';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import javascriptLogo from '../../assets/logos/javascript.svg';
import reactLogo from '../../assets/logos/react.svg';
import sassLogo from '../../assets/logos/sass.svg';
import graphqlLogo from '../../assets/logos/graphql.svg';
import mariadbLogo from '../../assets/logos/mariadb.svg';
import nodejsLogo from '../../assets/logos/nodejs.svg';
import art1 from '../../assets/arts/flat1.svg';

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

  const getPosts = async () => {
    try{
      const posts = await fetch("https://deppback.herokuapp.com/").then((data) => data.json())
      return posts
    }catch(error){
      console.log(error)
    }
  }

  return(
  <>
  {console.log(getPosts())}
<div className="main">

      <div className="artMain"> <img src={art1} alt="flat-design"/> </div>
        <div className="title">
          <h1 className="titleName">FRONT END WEB DEVELOPER !!!</h1>
            <p className="subTitle">
            Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Cupiditate,
      autem totam suscipit ullam iste qui quaerat incidunt provident
       tenetur aliquam nostrum corrupti minus labore,
        sapiente vitae asperiores accusamus voluptatum itaque? </p>
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
