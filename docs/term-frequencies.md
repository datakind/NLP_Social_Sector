---
layout: default-with-mathjax
permalink: term-frequencies
title: Term Frequencies
include-in-navigation: true
nav-description: “Let’s rank words by importance.”
---

## Term Frequencies (TF-IDF)

A basic question to ask about a collection of texts is: “_What are some common keywords used throughout?_” Tf-idf (term frequency-inverse document frequency) is a heuristic that tries to score how important a term is to a particular document within a set of documents. The basic intuition is that if a term occurs frequently in a particular text, but only occurs in a few of the texts in the collection, then it is probably more important to that specific text.

Applied to our dataset of state bills, we find that the highest term counts (e.g., “include”, “bill”, “follow”) go to terms that also occur in the most bills. These are fairly generic words. The highest tf-idf scores (largest bubbles) go to terms that occur far less frequently (e.g., “police”, “animal”, “poverty”), but that tells us much more about the bills they from which come.

<div class="fullwidth-asset">
  <iframe frameborder="0" width="100%" height="720px" src="{{ '/assets/notebook_assets/tf-idf_viz.html' | relative_url }}"></iframe>
</div>

For example, if you hover over the word "homeless," you will see it is the term with the highest tf-idf score for California bill [AB-1733 Public records: fee waiver](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201320140AB1733). The bill's title and official summary — _"An act to add Section 103577 to the Health and Safety Code, and to amend Section 14902 of the Vehicle Code, relating to public records"_ — do a poor job of communicating the purpose of the bill: to provide identification to homeless persons.

The formula that is used to compute the tf-idf for a term _t_ of a document _d_ in a document set is:

{% raw %}
\\[
  \mathrm {tfidf} (t, d) = \mathrm {tf} (t, d) * \mathrm {idf} (t)
\\]
{% endraw %}

and the idf is computed as:

{% raw %}
\\[
  \mathrm {idf} (t) = \log { \frac {n}{ \mathrm {df} (t) } } + 1
\\]
{% endraw %}

where _n_ is the total number of documents in the document set and df(_t_) is the document frequency of _t_; the document frequency is the number of documents in the document set that contain the term _t_.

[Sample code](https://github.com/datakind/NLP_Social_Sector/blob/master/notebooks/tf-idf.ipynb)
