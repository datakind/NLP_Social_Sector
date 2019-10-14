# Introduction

This folder contains sample Jupyter notebooks (Python) for the DataKind project "Natural Language Processing in the Social Sector".

Demo contents (contributor):

- `nlp_demo.ipynb` (Matthew Harris): Generate demo output used in the "Pre-Processing, Parts of Speech, and Named Entities" page
- `tf-idf.ipynb` (John Winter): Exploring term frequencies in bills data
- `LDA.ipynb` (Sarah Eltinge): Topic modeling with Latent Dirichlet Allocation
- `text_summarization.ipynb` (John Winter): Example of text summarization techniques
- `Openstates_classifier_Demo.ipynb` (Matthew Harris): Text classification using Fasttext
- `./scrapers/bill_scrapers.ipynb` (John Winter): Sample code to scrape bills from selected state websites
- `./scrapers/Openstates_GraphQL_API_extract.ipynb` (Matthew Harris): Extracts Openstates bills data using Graph QL API

# How to run notebooks

File `requirements.txt` provides dependencies, which can be installed with:

```
pip install -r requirements.txt`
git clone https://github.com/facebookresearch/fastText.git
cd fastText && make && pip install .
```

You can then run the notebooks in Jupyter.

## Docker

Additionally a simple Docker environment has been included, which includes Jupyter and pre-installed Python packages.

#### Requirements

Install [Docker](https://docs.docker.com/install/)

#### Building the Docker image

```docker build -t dk_jupyter .```

#### Running Jupyter

1. ```docker run --name dk_jupyter --rm -e JUPYTER_ENABLE_LAB=yes -e GRANT_SUDO=yes -v ${PWD}:/home/jovyan/work -p 8888:8888 -p 9000:9000 dk_jupyter```
2. Make note of the URL printed in the console, the token is the last part
3. Open and browser and go to URL, http://127.0.0.1:8888/?token=SOME_BIG_TOKEN_HERE

To open notebooks

1. In left pane, navigate to notebooks
2. Click on notebook


#### Installing packages in running container

You can install packages either from the running container, or inside a nodebook itself:

```
import sys
!{sys.executable} -m pip install numpy
```

For this to persist, add package to `requirements.txt` and rebuild the Docker image as described above.
