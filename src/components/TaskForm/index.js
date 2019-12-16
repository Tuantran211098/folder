import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
	render() {
		const { open, onhandeClose } = this.props;
		// eslint-disable-next-line no-tabs
		return (
			<Dialog
				open={open}
				onClose={this.handeClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Thêm mỚI cÔNG vIỆC
				</DialogTitle>
				<DialogContent>
					<TextField
						required
						id="standard-name"
						label="Name"
						defaultValue="Hello World"
						margin="normal"
					/>
					<TextField
						id="standard-multiline-flexible"
						label="Multiline"
						multiline
						rowsMax="4"
						margin="normal"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onhandeClose} color="primary">
						Cancel
					</Button>
					<Button onClick={onhandeClose} color="primary">
						ok
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}
TaskForm.propTypes = {
	open: PropTypes.object,
	onhandeClose: PropTypes.object,
};
export default withStyles(styles)(TaskForm);
