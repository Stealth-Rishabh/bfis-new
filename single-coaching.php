<?php get_header(); ?>
<?php
if (have_posts()):
  while (have_posts()):
    the_post(); ?>
    <!-- Banner Sec Starts -->
    <section class="page_heading" id="post-<?php the_ID(); ?>">
      <?php $banner_img = get_the_post_thumbnail_url();
      if (!empty($banner_img)) { ?>
        <div class="banner_img_sec">
          <img src="<?php echo $banner_img; ?>" alt="banner">
        </div>
      <?php } ?>
      <div class="container">
        <div class="row text-center">
          <h1><?php the_title(); ?></h1>
          <div class="content text-center ">
            <?php the_content(); ?>
          </div>
          </>
        </div>
      </div>
    </section>
    <!-- Banner Sec Ends -->
    <!-- course section Starts -->
    <section class="course_coaching">
  <div class="container py-5">
    <div class="custom-heading">
      <h2><?php echo get_field('heading_coachingenterance'); ?></h2>
    </div>

    <div class="row g-4">
      <?php
      if (have_rows('courses_coachingenterance')):
        while (have_rows('courses_coachingenterance')):
          the_row();
          $course_img_value = get_sub_field('image_coachingrepeat');
          $course_heading_value = get_sub_field('heading_coachingrepeat');
          $course_tagline_value = get_sub_field('tagline_coachingrepeat');
          $course_link_value = get_sub_field('course_link_coachingrepeat');
          ?>
          <div class="col-md-6 col-lg-3">
            <div class="course-card">
              <?php if (!empty($course_img_value['url'])) { ?>
                <img src="<?php echo esc_url($course_img_value['url']); ?>" 
                     alt="<?php echo esc_attr($course_heading_value); ?>">
              <?php } else { ?>
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GXnincSzT16QSM0y1E30bXn0v7mQft.png" 
                     alt="<?php echo esc_attr($course_heading_value); ?>">
              <?php } ?>
              <div class="card-content">
                <h3><?php echo esc_html($course_heading_value); ?></h3>
                <p><?php echo esc_html($course_tagline_value); ?></p>
                <a href="<?php echo esc_url($course_link_value); ?>" class="learn-more">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <?php
        endwhile;
      else:
        echo '<p>No courses available.</p>';
      endif;
      ?>
    </div>
  </div>

  
</section>

<section class="coaching_tab_sec">
  <div class="container">
    <div class="row">
      <div class="coaching_tabs">
        <h2 class="text-center custom_heading">Important Information about NID</h2>
        
        <!-- Modified tab navigation to match the image design -->
        <ul class="nav nav-tabs info_header" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button"
              role="tab" aria-controls="about" aria-selected="true">About NID</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="date-tab" data-bs-toggle="tab" data-bs-target="#date" type="button" role="tab"
              aria-controls="date" aria-selected="false">Date</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pattern-tab" data-bs-toggle="tab" data-bs-target="#pattern" type="button"
              role="tab" aria-controls="pattern" aria-selected="false">Pattern</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="application-tab" data-bs-toggle="tab" data-bs-target="#application"
              type="button" role="tab" aria-controls="application" aria-selected="false">Application Form</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="admit-tab" data-bs-toggle="tab" data-bs-target="#admit" type="button"
              role="tab" aria-controls="admit" aria-selected="false">Admit Card</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="cutoff-tab" data-bs-toggle="tab" data-bs-target="#cutoff" type="button"
              role="tab" aria-controls="cutoff" aria-selected="false">Cut Off</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="result-tab" data-bs-toggle="tab" data-bs-target="#result" type="button"
              role="tab" aria-controls="result" aria-selected="false">NID Result</button>
          </li>
        </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">About NID
                <?php
                if (is_singular()) {
                  $post_id = get_the_ID(); // Get the current post ID.
                  $post_type = get_post_type($post_id); // Get the current post type.
            
                  // Check if the post type supports default categories.
                  if ($post_type === 'coaching' || taxonomy_exists('coachingcat')) {
                    $categories = get_the_category($post_id);
                    print_r($categories);
                    if (!empty($categories)) {
                      foreach ($categories as $category) {
                        echo 'Category: ' . esc_html($category->name) . '<br>';
                      }
                    } else {
                      echo 'No categories assigned.';
                    }
                  }

                  // For custom taxonomies, replace 'custom_taxonomy' with your taxonomy slug.
                  $taxonomy = 'custom_taxonomy'; // Update this with the taxonomy name.
                  if (taxonomy_exists($taxonomy)) {
                    $terms = get_the_terms($post_id, $taxonomy);
                    if (!empty($terms) && !is_wp_error($terms)) {
                      foreach ($terms as $term) {
                        echo 'Term: ' . esc_html($term->name) . '<br>';
                      }
                    } else {
                      echo 'No terms assigned for this taxonomy.';
                    }
                  }
                }
                ?>

              </div>
              <div class="tab-pane fade" id="date" role="tabpanel" aria-labelledby="date-tab">Date</div>
              <div class="tab-pane fade" id="pattern" role="tabpanel" aria-labelledby="pattern-tab">Pattern</div>
              <div class="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">Application Form
              </div>
              <div class="tab-pane fade" id="admit" role="tabpanel" aria-labelledby="admit-tab">Admit Card</div>
              <div class="tab-pane fade" id="cutoff" role="tabpanel" aria-labelledby="cutoff-tab">Cut Off</div>
              <div class="tab-pane fade" id="result" role="tabpanel" aria-labelledby="result-tab">Nid Result</div>
            </div>
          </div>
        </div>
      </div>
    </section>

<style>

.course-card {
        position: relative;
        height: 400px;
        overflow: hidden;
        color: white;
    }
    
    .course-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    .course-card:hover::before {
      background: linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0.5));
    }

    .course-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        z-index: 2;
    }

    .learn-more {
        background-color: #ff0000;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        color: white;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .learn-more:hover {
        background-color: #cc0000;
        color: white;
    }

.coaching_tab_sec {
  padding: 40px 0;
}

.coaching_tab_sec h2 {
  color: #ff0000;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
}

.info_header {
  display: flex;
  border: none !important;
  background: #f0f0f0;
  margin-bottom: 20px !important;
}

.nav-item {
  margin: 0 !important;
}

.nav-link {
  border: none !important;
  border-radius: 0 !important;
  padding: 10px 20px !important;
  color: #333 !important;
  background: transparent !important;
  border-right: 1px solid #ddd !important;
  margin: 0 !important;
}

.nav-link.active {
  background-color: #d32f2f !important;
  color: white !important;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tab-pane {
  margin: 0;
  line-height: 1.6;
}

/* Add this if you want the first tab header to have red background by default */
/* #myTab li:first-child .nav-link {
  background-color: #d32f2f !important;
  color: white !important;
} */

.custom-heading {
  display: flex;
  align-items: center;
  text-align: center; /* Center the text */
  margin: 20px 0; /* Adjust margin as needed */
}

.custom-heading h2 {
  flex: 1; /* Allow the heading to take available space */
  margin: 0; /* Remove default margin */
  font-weight: bold; /* Make the text bold */
}

.custom-heading::before,
.custom-heading::after {
  content: '';
  flex: 1; /* Allow lines to take available space */
  border-top: 2px solid red; /* Line color and thickness */
  margin: 0 10px; /* Space between lines and text */
}
</style>

    <!-- course section Ends -->

  <?php endwhile;
else: ?>
  <p><?php _e('Sorry, no posts found.', 'textdomain'); ?></p>
<?php endif;
get_footer();
?>