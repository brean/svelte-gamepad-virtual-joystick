# 1.0.3
- Dependency update to current versions

# 1.0.2
## API-changes
- unify List and Tabbar to have a previous/next-Input for both

# 1.0.1
## Bugfix
- expose new Hint

# 1.0.0
## Cleanup
- Hints as own component

# 1.0.0-rc5
## Bugfix
- Fix where gamepad ignores keyboard presses (ignored by thisKey)

# 1.0.0-rc4
## API-changes
 - consumePress-flag that determines if button should consume events and stop forwarding to other components (default behavior is false)
 - onclick-callback is void instead of boolean (onclick can not interfere bubbling behavior of press events anymore)

## Bugfixes
 - Activate Joystick directly
 - Focus on list to select sth. in side-nav in demo

# 1.0.0-rc3
## API-changes
 - update exports, include (un)registerComponent


# 1.0.0-rc2
## API-changes
 - update exports, include component-state

# 1.0.0-rc1
## API-changes
 - One InputManager instead of KeyboardManager and GamepadManager

# 0.2.0
## New features
 - New focus and input handling management utilizing one InputComponent that can be inheritted.
 - Include icons (by kenney.nl) to show hints