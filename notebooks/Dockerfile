FROM jupyter/datascience-notebook

COPY requirements.txt .
RUN pip install -r requirements.txt

# Jupyter extras
RUN jupyter labextension install @jupyterlab/plotly-extension

# Fasttext
RUN git clone https://github.com/facebookresearch/fastText.git
RUN cd fastText && make && pip install .



