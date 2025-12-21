from pathlib import Path

import jinja2


BASE_PATH = Path(__file__).parent.absolute()
TEMPLATE_DIR = BASE_PATH / 'templates'
ICONS_DIR = BASE_PATH / 'src' / 'lib' / 'assets' / 'kenney_input_prompts'
TEMPLATE_ICONS = 'KenneyIcon.svelte.j2'
ICON_FILE = BASE_PATH / 'src' / 'lib' / 'components' / 'Icon.svelte'


def main():
    """Generate Icons."""
    templateLoader = jinja2.FileSystemLoader(searchpath=TEMPLATE_DIR)
    templateEnv = jinja2.Environment(loader=templateLoader)
    template_icons = templateEnv.get_template(TEMPLATE_ICONS)
    svg_path = ICONS_DIR.relative_to(BASE_PATH / 'src')

    generic = {
        0: 'button_color_a_cross',
        1: 'button_color_b_circle',
        2: 'button_color_x_square',
        3: 'button_color_y_triangle',
    }

    xbox_buttons = {
        0: 'xbox_button_color_a',
        1: 'xbox_button_color_b',
        2: 'xbox_button_color_x',
        3: 'xbox_button_color_y',
        4: 'xbox_lb',
        5: 'xbox_rb',
        6: 'xbox_lt',
        7: 'xbox_rt',
        8: 'xbox_stick_l_press',
        9: 'xbox_stick_r_press',
        10: 'xbox_dpad_up',
        11: 'xbox_dpad_down',
        12: 'xbox_dpad_left',
        13: 'xbox_dpad_right',
        14: 'xbox_button_view',
        15: 'xbox_button_menu',
        'dpad_horizontal': 'xbox_dpad_horizontal',
        'dpad_vertical': 'xbox_dpad_vertical',
        'left_axis': 'xbox_stick_l',
        'left_horizontal': 'xbox_stick_l_horizontal',
        'left_vertical': 'xbox_stick_l_vertical',
        'left_up': 'xbox_stick_l_up',
        'left_right': 'xbox_stick_l_right',
        'left_left': 'xbox_stick_l_left',
        'left_down': 'xbox_stick_l_down',
        'right_axis': 'xbox_stick_r',
        'right_horizontal': 'xbox_stick_r_horizontal',
        'right_vertical': 'xbox_stick_r_vertical',
        'right_up': 'xbox_stick_r_up',
        'right_right': 'xbox_stick_r_right',
        'right_left': 'xbox_stick_r_left',
        'right_down': 'xbox_stick_r_down',
    }

    ps4_buttons = {
        0: 'playstation_button_color_cross',
        1: 'playstation_button_color_circle',
        2: 'playstation_button_color_square',
        3: 'playstation_button_color_triangle',
        4: 'playstation_trigger_l1',
        5: 'playstation_trigger_r1',
        6: 'playstation_trigger_l2',
        7: 'playstation_trigger_r2',
        8: 'playstation4_button_share',
        9: 'playstation4_button_options',
        10: 'playstation_stick_l_press',
        11: 'playstation_stick_r_press',
        12: 'playstation_dpad_up',
        13: 'playstation_dpad_down',
        14: 'playstation_dpad_left',
        15: 'playstation_dpad_right',
        16: 'playstation_button_circle',
        'dpad_horizontal': 'playstation_dpad_horizontal',
        'dpad_vertical': 'playstation_dpad_vertical',
        'left_axis': 'playstation_stick_l',
        'left_horizontal': 'playstation_stick_l_horizontal',
        'left_vertical': 'playstation_stick_l_vertical',
        'left_up': 'playstation_stick_l_up',
        'left_right': 'playstation_stick_l_right',
        'left_left': 'playstation_stick_l_left',
        'left_down': 'playstation_stick_l_down',
        'right_axis': 'playstation_stick_r',
        'right_horizontal': 'playstation_stick_r_horizontal',
        'right_vertical': 'playstation_stick_r_vertical',
        'right_up': 'playstation_stick_r_up',
        'right_right': 'playstation_stick_r_right',
        'right_left': 'playstation_stick_r_left',
        'right_down': 'playstation_stick_r_down',
    }

    keyboard = {
        # '/': 'keyboard_division',
        'any': 'keyboard_any',
        '/': 'keyboard_slash_forward',
        '*': 'keyboard_asterisk',
        ',': 'keyboard_comma',
        '.': 'keyboard_period',
        ':': 'keyboard_colon',
        ';': 'keyboard_semicolon',
        '[': 'keyboard_bracket_open',
        ']': 'keyboard_bracket_close',
        '+': 'keyboard_plus',
        '-': 'keyboard_minus',
        '~': 'keyboard_tilde',
        ' ': 'keyboard_space_icon',
        '"': 'keyboard_quote',
        'backspace': 'keyboard_backspace_icon',
        'capslock': 'keyboard_capslock_icon',
        'tab': 'keyboard_tab_icon',
        'shift': 'keyboard_shift_icon',
        'arrowleft': 'keyboard_arrows_left',
        'arrowright': 'keyboard_arrows_right',
        'arrowup': 'keyboard_arrows_up',
        'arrowdown': 'keyboard_arrows_down',
        'pagedown': 'keyboard_page_down',
        'pageup': 'keyboard_page_up',
        'end': 'keyboard_end',
        'home': 'keyboard_home',
        'control': 'keyboard_ctrl',
        'enter': 'keyboard_return',
    }

    def keys(start, end):
        return [chr(x) for x in range(ord(start), ord(end)+1)]

    for x in keys('a', 'z') + keys('0', '9'):
        keyboard[x] = f'keyboard_{x}'
    for x in range(1, 13):
        keyboard[f'f{x}'] = f'keyboard_f{x}'

    with open(ICON_FILE, 'w') as fh:
        fh.write(template_icons.render({
            'generic_buttons': generic,
            'ps4_buttons': ps4_buttons,
            'xbox_buttons': xbox_buttons,
            'keyboard': keyboard,
            'svg_path': svg_path
        }))


if __name__ == '__main__':
    main()
