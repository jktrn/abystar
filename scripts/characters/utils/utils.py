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

def to_kebab_case(string: str) -> str:
    """
    Converts a string to kebab case.

    Args:
        string (str): The input string.

    Returns:
        str: The string in kebab case.
    """
    try:
        return string.replace(' ', '-').lower()
    except Exception as e:
        logger.error(f"Error converting {string} to kebab case: {str(e)}")
        raise

def kebab_case(name: str) -> str:
    """
    Converts a string to kebab case.

    Args:
        name (str): The input string.

    Returns:
        str: The string in kebab case.
    """
    try:
        clean_name = name.replace('(', '').replace(')', '').lower()
        return '-'.join(clean_name.split())
    except Exception as e:
        logger.error(f"Error converting {name} to kebab case: {str(e)}")
        raise

def pascal_case(name: str) -> str:
    """
    Converts a string to Pascal case.

    Args:
        name (str): The input string.

    Returns:
        str: The string in Pascal case.
    """
    try:
        clean_name = name.replace('(', '').replace(')', '')
        return ''.join(word.title() for word in clean_name.split())
    except Exception as e:
        logger.error(f"Error converting {name} to Pascal case: {str(e)}")
        raise