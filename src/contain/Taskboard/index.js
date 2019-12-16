import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import Statuses from '../../constants';
import styles from './styles';

const ListTask = [
	{
		id: 1,
		title: 'ReadBook',
		descrip: 'doc di',
		status: 0,
	},
	{
		id: 3,
		title: 'react',
		descrip: 'hoc di',
		status: 2,
	},
	{
		id: 2,
		title: 'redux',
		descrip: 'will done',
		status: 1,
	},
];
class TaskBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handeClose = () => {
		this.setState({
			open: false,
		});
	};

	addClick = () => {
		this.setState({
			open: true,
		});
	};

	renderBoard() {
		let xhtml = null;
		var tuan = null;
		xhtml = (
			<Grid container spacing={1}>
				{Statuses.map((status, index) => {
					const taskFilter = ListTask.filter(
						task => task.status === status.value
					);
					return (
						<TaskList
							task={taskFilter}
							status={status}
							key={index}
						/>
					);
				})}
			</Grid>
		);
		return xhtml;
	}

	renderForm() {
		const { open } = this.state;
		let xhtml = null;
		xhtml = <TaskForm open={open} onhandeClose={this.handeClose} />;
		return xhtml;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.TaskBoard}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={this.addClick}
				>
					<AddIcon className={classes.spaceIcon} />
					Thêm Công Việc
				</Button>
				{this.renderBoard()}
				{this.renderForm()}
			</div>
		);
	}
}
TaskBoard.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
