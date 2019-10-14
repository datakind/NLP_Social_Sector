---
layout: default-with-mathjax
permalink: topic-modeling
title: Topic Modeling
include-in-navigation: true
nav-description: “I think I really have five categories of text here.”
---

## Topic Modeling

Given a collection of texts, you may expect that some texts are more similar to others based on the words that tend to occur together, e.g., common words across US news articles are different from those across international financial news.

Topic modeling discovers these patterns. One of the most popular approaches — Latent Dirichlet Allocation (LDA) — categorizes documents and terms into unlabeled topics, which are then interpreted by the user. The visualization below displays several different aspects of an LDA model. We’ll walk through these one by one. To start, select the five topic model:

<!-- The below is extracted from the LDAvis to_html() export -->
<script src="{{ '/assets/js/d3.v3.js' | relative_url }}"></script>
<script src="{{ '/assets/js/ldavis.js' | relative_url }}"></script>

<!-- Options for 3-, 5-, and 10-topic models get rendered here -->

<div class="fullwidth-asset lda-topic-select-wrapper">
  <select class="lda-topic-count-select" id="lda-topic-count-select"></select>
</div>

<!-- D3 graphic gets rendered inside this div -->
<div class="fullwidth-asset lda-graphic" id="lda-graphic"></div>

<script>
  (function() {
    // Map of topic count to the url of the corresponding JSON file. Defined statically
    // because we need Jekyll to preprocess pathnames via the `relative_url` template tag.
    var topicCountToJsonPath = {
      '3': "{{ '/assets/notebook_assets/lda_3.json' | relative_url }}",
      '5': "{{ '/assets/notebook_assets/lda_5.json' | relative_url }}",
      '10': "{{ '/assets/notebook_assets/lda_10.json' | relative_url }}"
    }

    // Renders a graphic of the LDA topic model with `topicCount` topics
    function createVis(topicCount) {
      var ldaGraphicId = 'lda-graphic';
      document.getElementById(ldaGraphicId).innerHTML = '';
      new LDAvis('#' + ldaGraphicId, topicCountToJsonPath[topicCount]);
    }

    // Render select options and pre-select one if it's in the `topics` query param
    var topicCountDefault = '5';
    var maybeTopicMatch = window.location.search.match(/topics=(\d+)/) ;
    var initiallySelectedTopicCount = maybeTopicMatch ? maybeTopicMatch[1] : topicCountDefault;
    var select = document.getElementById('lda-topic-count-select');
    Object.keys(topicCountToJsonPath).forEach(function(count) {
      var htmlOption = document.createElement('option');
      htmlOption.value = count;
      htmlOption.innerHTML = count + ' topics';
      if (initiallySelectedTopicCount === count) {
        htmlOption.selected = true;
      }
      select.appendChild(htmlOption);
    })

    // Swap out the graphic when the user chooses something in the dropdown, and
    // preserve it in the url if the browser supports it
    select.addEventListener('change', function(event) {
      createVis(event.target.value);
      if (window.history) {
        window.history.replaceState({}, '', '?topics=' + event.target.value);
      }
    });

    // Set up the initially selected graphic
    createVis(select.value);
  })();
</script>

The five topics in our model are represented as circles, on the left. The size and numbering of the circles indicate how common the topic is in our dataset. (The topic labeled 1 is the most common, while the topic labeled 5 is the least common.) The closer together two circles are to each other, the more closely related they are. For example, topics 2 and 5 overlap with each other. This overlap indicates that they are similar to each other (i.e., the topics share many similar words). Topics 1 and 4, however, are very far apart; they are dissimilar. Overall, the image on the left provides a picture of how common the topics are, and how they are related to each other.

Click on the circle for topic 1. You will notice that the bar chart on the right changes. From top to bottom, the words listed here are the most common words in topic 1. The dark orange bar indicates how many times a given word appears in topic 1; the pale orange bar indicates how many times a given word appears overall. For example, you can see that the word “child” appears over 10,000 times in topic 1, and more than 20,000 times overall. If you hover over a word on the right hand side of the visualization, the circles on the left hand side will change in size to reflect how commonly that word appears in the topics. If you hover over the word “year,” the circles for topics 1 and 3 on the left grows until they are nearly equal in size, and dwarf all the other topics. This is because most of the time when the word “child” appears in our dataset, it is in either topic 1 or topic 3.

Looking at the most common terms for each topic can begin to give us a sense of what that topic is about. However, very common terms will show up in multiple topics, as we have seen with the word “child.” This can help us understand what makes topics 1 and 3 different from the other topics in the model. However, we also need to understand what differentiates these two topics from each other. For this, we can look at the words that are more exclusive — i.e., unique — to a given topic.

Select the circle for topic 1 and slide the bar on the right labeled λ all the way to 0. Notice that the numbers on the x axis for the bar graph get much smaller; we are now looking at terms that are less common overall. Also notice that the bars are entirely, or almost entirely, red. This means that every time a given term appears, it is in topic 1. Hover over the word “predator” and you will see the topic 1 circle on the left grow, and all the other circles disappear.

The best way to get an idea of what a given topic is about is to read through this list of terms at various settings of λ. Setting λ = 1 gives you the most common terms in a topic; λ = 0 gives you the most unique terms in a topic; λ in the middle is somewhere between the two. [One study](https://www.aclweb.org/anthology/W14-3110) showed that setting λ = 0.6 gives the most interpretable list of words for a given topic. Play around with different settings and see what helps you best understand these topics and this model.

For more information about this visualization, check out [the paper](https://www.aclweb.org/anthology/W14-3110) written by Carson Sievert and Kenneth E. Shirley, who designed it.

Based on these results, we generated the following labels for the topics in each model. It is important to note that labeling topics is subjective; you may have a better label for one or more of the topics below. This is one of the reasons that topic modeling is most useful when performing an exploratory analysis; it can be helpful to have multiple subject matter experts review and label the generated topics.

Three Topic Model:

1. School Governance
2. Campus Construction
3. Taxes

Five Topic Model:

1. Licensing
2. Taxes
3. Child Welfare/Assistance
4. Campus Construction
5. School Governance/Pensions

Ten Topic Model:

1. Child Welfare/Assistance
2. Campus Construction
3. Licensing
4. Taxes
5. Foster Care
6. School Governance
7. Budgeting
8. Gambling Licensing/Revenue
9. Pensions
10. Corporate Governance

Once we generated labels for all of the topics, it was interesting to see how each document is categorized in the three, five, and ten topic model. We can visualize this with a Sankey diagram, which is designed to show the “flow” between different categories.

<div class="fullwidth-asset">
  <iframe frameborder="0" width="100%" height="720px" src="{{ '/assets/notebook_assets/sankey.html' | relative_url }}"></iframe>
</div>

Looking at this diagram, we unsurprisingly see that almost all bills labeled “Pensions” in the ten topic model were labeled “School Governance/Pensions” in the five topic model. Other topics, such as “Budgeting,” draw from a wider range of sources. It is not unusual for LDA to generate a “miscellaneous” topic like this one, which is far less cohesive than others. This is because every document must be categorized in some way, and some just don’t fit neatly into one of a few categories. Contrast the “Budgeting” topic with the “Campus Construction” topic. While small, “Campus Construction” appears consistently in all three models. This indicates that it is a distinct, well-defined topic.

With LDA and some easy-to-generate visualizations, you can readily explore prevalent topics in thousands of documents — without having to read all of them!

[Sample code](https://github.com/datakind/NLP_Social_Sector/blob/master/notebooks/LDA.ipynb)
