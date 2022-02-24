import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";
import { ItemMovie } from "../../models";

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
  const { item } = props;
  let posterIMG = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 315 }}>
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
        <Typography variant="body2" color="text.secondary">
          {item.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
