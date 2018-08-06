/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { StyleSheet, Animated, View, ViewStyle } from 'react-native';

export interface IAppSwitchChildProps {
  isActive?: boolean;
}

interface IProps extends React.Props<AppSwitch> {
  index: number;
  children: React.ReactNode;
}

interface IState {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  floating: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle
});

class AppSwitch extends React.PureComponent<IProps, IState> {
  opacities: Animated.Value[];
  constructor(props: IProps) {
    super(props);
    this.opacities = React.Children.map(props.children,
      (child, index) => new Animated.Value(index === props.index ? 1 : 0));
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const prevIndex = this.props.index;
    const currIndex = nextProps.index;
    const diffCount = React.Children.count(nextProps.children) - this.opacities.length;
    for (let i = 0; i < diffCount; i++) {
      this.opacities.push(new Animated.Value(i === currIndex ? 1 : 0));
    }
    if (currIndex == prevIndex) {
      return;
    }

    // Animation
    const animations: Animated.CompositeAnimation[] = [];
    this.opacities.forEach((opacity, index) => {
      if (index === currIndex || index === prevIndex) {
        const animation = Animated.timing(
          opacity, {
            duration: 200,
            toValue: index === currIndex ? 1 : 0,
            useNativeDriver: true,
          }
        );
        animations.push(animation);
        return;
      }
      opacity.setValue(0);
    });

    Animated.parallel(
      animations
    ).start();
  }

  public render() {
    return (
      <View style={styles.container}>
        {React.Children.map(this.props.children, this.renderChild)}
      </View>
    );
  }

  renderChild = (child: React.ReactChild, index: number) => {
    const isActive = index === this.props.index;
    const opacity = this.opacities[index];
    return (
      <Animated.View
        key={index}
        pointerEvents={isActive ? 'auto' : 'none'}
        style={[styles.floating, { opacity }]}>
        {React.isValidElement(child) && React.cloneElement<IAppSwitchChildProps>(child, { isActive })}
      </Animated.View>
    );
  }
}

export default AppSwitch;
