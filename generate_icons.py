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
        10: 'playstation_stick_l_down',
        11: 'playstation_stick_r_down',
        12: 'playstation_dpad_up',
        13: 'playstation_dpad_down',
        14: 'playstation_dpad_left',
        15: 'playstation_dpad_right',
        16: 'playstation_button_circle',
        'axis_left': 'playstation_stick_l',
        'axis_right': 'playstation_stick_r',
    }

    keyboard = {
        '+': 'keyboard_plus',
        '-': 'keyboard_minus',
        '~': 'keyboard_tilde',
        ' ': 'keyboard_space_icon',
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
            'keyboard': keyboard,
            'ps4_buttons': ps4_buttons,
            'svg_path': svg_path
        }))


if __name__ == '__main__':
    main()
