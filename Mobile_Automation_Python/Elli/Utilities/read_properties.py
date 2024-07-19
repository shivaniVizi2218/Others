import json
import configparser


def read_config_data(file_path, section):
    config = configparser.ConfigParser()
    config.read(file_path)
    if section == 'Mobile':
        if 'Mobile' in config:
            return dict(config['Mobile'])
    else:
        raise ValueError(f"Section '{section}' is not supported.")


def read_json_file(file_path):
    with open(file_path, "r") as file:
        data = json.load(file)
    return data


