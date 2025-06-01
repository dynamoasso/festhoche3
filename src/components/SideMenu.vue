<template>
  <nav class="side-menu">
    <ul>
      <li v-for="section in sections" :key="section.id" :class="{ active: activeSection === section.id }">
        <a href="#" @click.prevent="scrollToSection(section.id)">{{ section.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'SideMenu',
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const activeSection = ref('');

    // Function to scroll to a section when a menu item is clicked
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Function to update the active section based on scroll position
    const updateActiveSection = () => {
      // Get all sections
      const sectionElements = props.sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);

      if (sectionElements.length === 0) return;

      // Calculate which section is most visible in the viewport
      const viewportHeight = window.innerHeight;
      let maxVisibleSection = null;
      let maxVisibleArea = 0;

      sectionElements.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          maxVisibleSection = id;
        }
      });

      if (maxVisibleSection) {
        activeSection.value = maxVisibleSection;
      }
    };

    onMounted(() => {
      // Add scroll event listener
      window.addEventListener('scroll', updateActiveSection);
      // Initial call to set the active section
      updateActiveSection();
    });

    onUnmounted(() => {
      // Remove scroll event listener
      window.removeEventListener('scroll', updateActiveSection);
    });

    return {
      activeSection,
      scrollToSection
    };
  }
}
</script>

<style scoped>
.side-menu {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 15px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  /* Ensure the menu doesn't overlap with the main content on smaller screens */
  max-width: 200px;
  /* Add a subtle entrance animation */
  animation: fadeIn 0.5s ease-out;
}

.side-menu:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.side-menu li {
  position: relative;
  transition: transform 0.3s ease;
}

.side-menu li:hover {
  transform: translateX(5px);
}

.side-menu a {
  display: block;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 15px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.side-menu li.active a {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

.side-menu li:not(.active) a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

/* Responsive styles */
@media (max-width: 768px) {
  .side-menu {
    left: 10px;
    padding: 10px 5px;
  }

  .side-menu a {
    padding: 5px 10px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .side-menu {
    bottom: 20px;
    top: auto;
    right: 50%;
    transform: translateX(50%);
    padding: 10px;
    max-width: 100%;
    width: 90%;
    animation: fadeInMobile 0.5s ease-out;
  }

  @keyframes fadeInMobile {
    from {
      opacity: 0;
      transform: translateX(50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(50%) translateY(0);
    }
  }

  .side-menu ul {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .side-menu li {
    margin: 0 5px;
  }

  .side-menu li:hover {
    transform: translateY(-5px);
  }

  .side-menu a {
    font-size: 12px;
    padding: 5px 8px;
  }
}
</style>
