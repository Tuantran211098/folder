import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

class TaskItem extends Component {
	render() {
		const { classes, task, status } = this.props;
		return (
			<Card key={task.id} className={classes.Card}>
				<CardContent>
					<Grid container justify="space-around">
						<Grid item md={8} xs={12}>
							<Typography component="h2">{task.title}</Typography>
						</Grid>
						<Grid item md={4} xs={12}>
							{status.label}
						</Grid>
					</Grid>
					<p>{task.descrip}</p>
				</CardContent>
				<CardActions className={classes.cardAction}>
					<Fab color="primary" aria-label="add" size="small">
						<Icon fontSize="small">edit-icon</Icon>
					</Fab>
					<Fab color="primary" aria-label="add" size="small">
						<Icon fontSize="small">delete-icon</Icon>
					</Fab>
				</CardActions>
			</Card>
		);
	}
}
TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.object,
	status: PropTypes.object,
};
export default withStyles(styles)(TaskItem);
