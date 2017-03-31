import React, { Component, PropTypes } from 'react'
import Drawer from 'react-native-drawer'
import SideDrawerContent from './SideDrawerContent'

const propTypes = {
  navigationState: PropTypes.object,
};

export default class SideDrawer extends Component {
	render() {
		const state = this.props.navigationState;
		const children = state.children;
		
		return (

			
			// {/*<Drawer
			// 	ref={c => this.drawer = c}
			// 	type="overlay"
			// 	content={<SideDrawerContent />}
			// 	tapToClose
			// 	openDrawerOffset={0.2}
			// 	panCloseMask={0.2}
			// 	closedDrawerOffset={-3}
			// 	styles={drawerStyles}
			// 	tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}>
      		// 	{
			// 		React.Children.map(
			// 			this.props.children, c => React.cloneElement(c, {route: this.props.route})
			// 		)
			// 	}
			// </Drawer>*/}
		<Drawer
			ref="navigation"
			type="displace"
			onOpen={() => Actions.refresh({ key: state.key, open: true })}
			onClose={() => Actions.refresh({ key: state.key, open: false })}
			content={<SideDrawerContent/>}
			tapToClose
			openDrawerOffset={0.2}
			panCloseMask={0.2}
			negotiatePan
			tweenHandler={(ratio) => ({
			main: { opacity: Math.max(0.54, 1 - ratio) },
			})}
		>
			<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
	  
    )
	}
}

SideDrawer.propTypes = {
	children: PropTypes.node,
	route: PropTypes.object,
}

var drawerStyles = {
	drawer: { backgroundColor: '#ffffff' },
	main: { paddingLeft: 3 }
}