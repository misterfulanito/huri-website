'use client';

import { useState } from 'react';
import styles from './Timeline.module.css';

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set([items[0]?.id]));

  const toggleExpand = (id: string) => {
    setActiveId(id);
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.line} aria-hidden="true" />

      {items.map((item, index) => {
        const isActive = activeId === item.id;
        const isExpanded = expandedIds.has(item.id);

        return (
          <article
            key={item.id}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
          >
            {/* Timeline node */}
            <div className={styles.nodeContainer}>
              <button
                className={`${styles.node} ${isActive ? styles.nodeActive : ''}`}
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                aria-label={`${item.title} at ${item.subtitle}, ${item.period}`}
              >
                <span className={styles.nodeInner} />
              </button>
              <div className={styles.connector} aria-hidden="true" />
            </div>

            {/* Content */}
            <div className={styles.content}>
              {/* Period badge */}
              <div className={styles.period}>
                <span className={styles.periodText}>{item.period}</span>
                {index === 0 && <span className={styles.currentBadge}>Current</span>}
              </div>

              {/* Card */}
              <div
                className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
                onClick={() => toggleExpand(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(item.id);
                  }
                }}
              >
                <header className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </header>

                <div
                  className={`${styles.cardBody} ${isExpanded ? styles.cardBodyExpanded : ''}`}
                  aria-hidden={!isExpanded}
                >
                  <ul className={styles.descriptionList}>
                    {item.description.map((desc, i) => (
                      <li key={i} className={styles.descriptionItem}>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {item.tags && item.tags.length > 0 && (
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.expandIndicator}>
                  <svg
                    className={`${styles.chevron} ${isExpanded ? styles.chevronUp : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
