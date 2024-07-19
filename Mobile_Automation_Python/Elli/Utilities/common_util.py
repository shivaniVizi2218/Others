import os


def file_path():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    CONFIG_PATH = os.path.join(current_dir, '..', 'Configurations', 'config.ini')
    LOGIN_PATH = os.path.join(current_dir,'..','Data','login.json')
    return current_dir, CONFIG_PATH,LOGIN_PATH


