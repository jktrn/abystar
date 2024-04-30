import os
import aiohttp
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

async def download_image(url: str, file_path: str) -> None:
    """
    Downloads an image from the given URL and saves it to the specified file path.

    Args:
        url (str): The URL of the image.
        file_path (str): The file path to save the image.
    """
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                if response.status == 200:
                    os.makedirs(os.path.dirname(file_path), exist_ok=True)
                    with open(file_path, 'wb') as f:
                        async for chunk in response.content.iter_chunked(1024):
                            f.write(chunk)
    except Exception as e:
        logger.error(f"Error downloading image from {url}: {str(e)}")
        raise

def parse_stat_value(value: str) -> float:
    """
    Parses a stat value from a string to a float.

    Args:
        value (str): The stat value as a string.

    Returns:
        float: The parsed stat value as a float.
    """
    try:
        if value.endswith('%'):
            return round(float(value.strip('%')) / 100, 5)
        try:
            return round(float(value), 5)
        except ValueError:
            return value
    except Exception as e:
        logger.error(f"Error parsing stat value {value}: {str(e)}")
        raise

def sanitize_filename(name: str) -> str:
    """
    Sanitizes a filename by removing special characters and converting it to lowercase.

    Args:
        name (str): The filename to sanitize.

    Returns:
        str: The sanitized filename.
    """
    try:
        return '-'.join(name.replace('(', '').replace(')', '').replace('"', '').replace("'", '').lower().split())
    except Exception as e:
        logger.error(f"Error sanitizing filename {name}: {str(e)}")
        raise

def pascal_case(name: str) -> str:
    """
    Converts a string to Pascal case.

    Args:
        name (str): The string to convert.

    Returns:
        str: The string in Pascal case.
    """
    try:
        return ''.join(word.title() for word in name.replace('(', '').replace(')', '').replace('-', '').replace('"', '').replace("'", '').split())
    except Exception as e:
        logger.error(f"Error converting {name} to Pascal case: {str(e)}")
        raise