import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#fff",
        background: "tomato",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "tomato",
    },
    subtitle1: {
        color: "tan",
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" component='h1' align="center" className={classes.heading}>
                Academic Background & Working Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2018
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Entered Tokyo Institute of Technology
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        computer science
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        In my first year of college, I studied a wide range of liberal arts courses in science and engineering.
                        They were also actively involved in group discussions in class, which helped them to improve their communication and presentation skills.
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2019  2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        studied computer science
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        computer science
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        大学二年生と三年生では大学でプログラミングやネットワーク、及びデータベースなど、コンピューターサイエンスに必須の知識を学びました。
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2021
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Laravel & Fargate (AWS)
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        株式会社Drafty
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        大学で一通りのコンピューターサイエンスの授業を受け終わったタイミングで、私は実際に実務経験を積みたいと考えていました。
                        そして当時、会社を経営する大学の同期がエンジニアを探していたため、インターンシップとして参加することになりました。
                    </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2022
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        algorithm & API & web Apps
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        self-study
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        最近はatcoderの過去問を解くことでアルゴリズムの勉強をしています。
                        その他にもReactを用いたWEBアプリの開発やAPIの作成などを行っています。
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Resume;