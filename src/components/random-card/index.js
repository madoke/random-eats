import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  }
};

function RandomCard(props) {
  const { t, classes, randomEat, onClickGetAnotherRandomEat } = props;
  return (
    <Card>
        <CardMedia
            className={classes.media}
            image={randomEat.img}
            title={randomEat.text}
        />
        <CardContent>
            <Typography className={classes.heading} gutterBottom variant="headline" component="h1">
            {t('baza', { food: t(randomEat.text) }).toUpperCase()}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={onClickGetAnotherRandomEat}>
            Get another random eat
            </Button>
        </CardActions>
    </Card>
  );
}

RandomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTranslation()(
  withStyles(styles)(
    RandomCard
  )
);
