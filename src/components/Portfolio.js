import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "応用情報技術者",
    description: `自分のITエンジニアとしての客観的な評価が欲しかったため、2022年春期の試験を受験しました。現在結果待ちです。`,
    image: project1,
  },
  {
    name: "研究",
    description: `VRを用いた体外離脱体験を扱っています。\
    現在言語学の視点を導入し、母国語によって自己身体認知に差があるのかを調べています。`,
    image: project2,
  },
  {
    name: "アルバイト-個別指導",
    description: `医学部同格を目指す浪人生の個別指導を4年間していました。\
主に数学を教えていましたが、担当生徒の合格のため、ただ数学を教えるだけでなく、日々の過ごし方や効率の良い勉強方法などを一緒に考えました。\
生徒の合格報告を聞いた時が一番やりがいを感じることができ、また担当コース責任者の方にも高く評価して頂きました。`,
    image: project3,
  },
  {
    name: "アルバイト-飲食店",
    description: `中目黒にあるミシュラン一つ星を持つお店でアルバイトをしています。\
完全予約制のお店で、私はホールの業務を担当しています。\
お客様の入れ替えが無いため、その日にご来店なさるお客様一人一人に対して、それぞれにどのようなサービスをすればより過ごしやすくなるのか、次にどんな要求が来そうであるのかを常に考えて行動しています。\
この経験を通して、効率の良い業務の遂行を考えたり、お客様の立場に寄り添って考える習慣が身につきました。`,
    image: project4,
  },
  {
    name: "趣味-ストリートダンス",
    description: `ストリートダンスは大学から始めました。\
それまでやっていたテニスを続けるといったことや、他競技と比べて始めやすさと奥深さを考慮した結果、ダンスをやることになりました。\
ダンスはサークルを引退した後でも続けており、年に二回大きなイベントで踊るために通年で練習しています。`,
    image: project5,
  },
  {
    name: "趣味-テニス",
    description: `テニスは中学に入ったタイミングで始めました。\
最近はあまりしていませんが、中学高校と大学のサークル活動とで10年近くやっています。\
テニスは自分でやるのも好きですが、プロの選手の試合を観るのも好きです。特に高校の頃は上達のために多くの試合動画を見てプロの動きを真似ていたり、テニススクールに通ったりしていました。`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
