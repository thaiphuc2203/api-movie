import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardMedia, CardContent, TextField,Rating } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Movie(props: any): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);
  const { item, index } = props;
  let posterIMG = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card key={index} sx={{ maxWidth: 315 }}>
      <CardMedia
        component="img"
        height="194"
        image={posterIMG}
        alt="Paella dish"
      />
      <CardHeader
        title={item.title}
        subheader={`Release date: ${item.release_date}`}
      />
      <CardContent>
        <Rating
          name="customized-10"
          defaultValue={item.vote_average}
          max={10}
        />
        <Typography variant="body2" >
          {item.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
