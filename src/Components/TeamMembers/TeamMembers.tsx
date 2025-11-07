import React from 'react';
// Assuming you would import the CSS file like this:
import './teamMember.css';

// Corrected Imports to match your file names: team_member1.png, team_member2.png, etc.
import member1 from '../../assets/images/team_member1.jpg';
import member2 from '../../assets/images/team_member2.jpg';
import member3 from '../../assets/images/team_member3.jpg';
import member4 from '../../assets/images/team_member4.jpg';

interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    altText: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, imageUrl, altText }) => {
    return (
        <div className="team-member-card">
            <div className="member-image-container">
                {/* The image is contained within a rounded square with a light border */}
                <img src={imageUrl} alt={altText} className="member-image" />
            </div>
            <h3 className="member-name">{name}</h3>
            <p className="member-role">{role}</p>
        </div>
    );
};

const TeamSection: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Devan Lane',
            role: 'Marketing Department',
            imageUrl: member1,
            altText: 'Devan Lane, a team member with glasses and a beard.',
        },
        {
            name: 'Darrel Steward',
            role: 'IT Department',
            imageUrl: member2,
            altText: 'Darrel Steward, a team member with glasses and a turtleneck.',
        },
        {
            name: 'Bessie Cooper',
            role: 'Software Development',
            imageUrl: member3,
            altText: 'Bessie Cooper, a smiling team member with curly hair.',
        },
        {
            name: 'Jhon Doe',
            role: 'Marketing Department',
            imageUrl: member4,
            altText: 'Jhon Doe, a smiling team member with a plaid shirt.',
        },
    ];

    return (
        <section className="team-section-container">
            {/* The blue dotted line is created using CSS borders on this container */}
            <div className="team-header">
                <span className="team-tag">DESIGNING FOR THE FUTURE</span>
                <h2 className="team-title">We've Exclusive Team Member</h2>
            </div>

            <div className="team-members-grid">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;